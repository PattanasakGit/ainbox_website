import { Request, Response } from 'express';
import Store, {IStore} from '../models/storedbModel';
import TierStatus from '../models/tierStatusModel';
import StatusCheck from '../models/statusCheckModel';
import BotQuota from '../models/botQuotaModel';

export const createStore = async (req: Request, res: Response) => {
  try {
    const store: IStore = req.body;
    const destination = req.params.destination;
    const newStore = new Store(store);
    await newStore.save();

    // Create and save tier status
    const newTierStatus = new TierStatus({
      page_id: destination,
      tier: "EC1"
    });
    await newTierStatus.save();

    // Create and save status check
    const newStatusCheck = new StatusCheck({
      page_id: destination,
      status: 1
    });
    await newStatusCheck.save();

    // Create and save bot quota
    const newBotQuota = new BotQuota({
      page_id: destination,
      quota: 1700
    });
    await newBotQuota.save();

    res.status(201).json({ 
      message: 'Store created successfully',
      store: newStore,
      tierStatus: newTierStatus,
      statusCheck: newStatusCheck,
      botQuota: newBotQuota,
      destination: destination
    });
  } catch (err) {
    console.error('Error creating store:', err);
    res.status(500).json({ error: 'Failed to create store and associated records' });
  }
};