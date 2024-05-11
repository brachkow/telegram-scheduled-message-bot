export interface Env {
  BOT_TOKEN: string;
  CHAT_ID: string;
}

import { Bot } from 'grammy';

export default {
  async scheduled(
    _controller: ScheduledController,
    env: Env,
    _ctx: ExecutionContext,
  ): Promise<void> {
    const bot = new Bot(env.BOT_TOKEN);

    bot.api.sendMessage(env.CHAT_ID, 'Hello World!');
  },
};
