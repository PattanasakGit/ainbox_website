import { Request, Response } from 'express';
import Store, {IStore} from '../models/storedbModel';
import TierStatus from '../models/tierStatusModel';
import StatusCheck from '../models/statusCheckModel';
import BotQuota from '../models/botQuotaModel';
import PageAccount from '../models/pageAccountModel';
import CustomerStatus from '../models/customerStatusModel';
import { signatureVerificationMiddleware } from '../middleware/signatureMiddleware';
import { signatureStore } from '../utils/signatureStore';

export const createStore = [
  signatureVerificationMiddleware,
  async (req: Request, res: Response) => {
    try {
      const store: IStore = req.body;
      const user_id = req.params.userId;
      const newStore = new Store(store);
      await newStore.save();

      // Create and save tier status
      const newTierStatus = new TierStatus({
        page_id: store.page_id,
        tier: "EC1"
      });
      await newTierStatus.save();

      // Create and save status check
      const newStatusCheck = new StatusCheck({
        page_id: store.page_id,
        status: 1
      });
      await newStatusCheck.save();

      // Create and save bot quota
      const newBotQuota = new BotQuota({
        user_id: user_id,
        page: [{ page_id: store.page_id }],
        quota: 1700
      });
      await newBotQuota.save();

      // Create and save page account
      const newPageAccount = new PageAccount({
        platform: 'Line',
        page_name: store.details.business_name,
        page_id: store.page_id,
        type: store.details.business_type,
        page_access_token: store.page_access_token,
        channel_secret: store.channel_secret
      });
      await newPageAccount.save();

      // Create and save customer status
      const newCustomerStatus = new CustomerStatus({
        line_user_id: store.line_user_id,
        page_id: store.page_id,
        status: 1
      });
      await newCustomerStatus.save();

      res.status(201).json({ 
        message: 'Store created successfully',
        store: newStore,
        tierStatus: newTierStatus,
        statusCheck: newStatusCheck,
        botQuota: newBotQuota,
        pageAccount: newPageAccount,
        CustomerStatus: newCustomerStatus
      });
      signatureStore.clear();
    } catch (err) {
      console.error('Error creating store:', err);
      res.status(500).json({ error: 'Failed to create store and associated records' });
    }
  }
];