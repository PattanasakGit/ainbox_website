import { Request, Response } from 'express';
import Store, {IStore} from '../models/storedbModel';
import TierStatus from '../models/tierStatusModel';
import StatusCheck from '../models/statusCheckModel';
import BotQuota from '../models/botQuotaModel';
import PageAccount from '../models/pageAccountModel';

export const createStore = async (req: Request, res: Response) => {
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
      quota: 1700
    });
    await newBotQuota.save();

    const newPageAccount = new PageAccount({
      platform: 'Line',
      page_name: store.details.business_name,
      page_id: store.page_id,
      type: store.details.business_type,
      page_access_token: store.page_access_token,
    });
    await newPageAccount.save();

    res.status(201).json({ 
      message: 'Store created successfully',
      store: newStore,
      tierStatus: newTierStatus,
      statusCheck: newStatusCheck,
      botQuota: newBotQuota,
      pageAccount: newPageAccount
    });
  } catch (err) {
    console.error('Error creating store:', err);
    res.status(500).json({ error: 'Failed to create store and associated records' });
  }
};