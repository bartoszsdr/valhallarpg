# Valhalla RPG*
Discord Bot RPG game inspired by many RPGs and cRPGs featuring adventures, quests, character development, PvP, riddles to solve, loot, inventory, training system, and storyline.

<sub>*Working title, work in progress</sub>

## Technology
This bot uses discord.js which is a Node.js module that allows to interact with the Discord API. All code is written in JavaScript language. It also uses dotenv and fs dependiencies for holding your Discord token out of sight and for easy file management. All user data is stored in .json files.

## Basic commands
- ```register``` allows you to register your character and start the game,
- ```char``` shows your character skills and balance,
- ```eq``` shows your character inventory,
- ```map``` shows known locations for adventure
- ```craft``` shows a list of known recipes and lets you craft items
- ```adventure``` lets you to start an adventure in order to progress in the story,
- ```help``` shows a list of all commands that the user can use along with desriptions.

## Usage (self hosting only for now)
1. Make a bot<br>
Go to https://discord.com/developers and select the new application button, then once you created a new application convert it into a bot by clicking the bot setting.
2. Invite the bot to your server<br>
While on https://discord.com/developers in OAuth2 tab select "bot" scope and grant it all the permissions (in the future this will be changed to just requierd ones). Go to the generated URL and invite bot to your server.
3. Download dependencies<br>
Run ```npm install``` in the terminal to download required dependencies.
4. Make a ```.env``` file<br>
In the main folder create ```.env``` file and paste in your token from previous website.<br>
```DISCORD_TOKEN = <replace this all with your token>```
5. Run the bot!<br>
In the terminal type ```node .``` and your bot will start right up!

## Commands (with their current state of development)
- [ ] register - name your character and start the game
- [ ] char - show character summary including skills, balance and PvP points.
- [x] eq - show character inventory
- [x] item - show item description and value
- [x] use - move item between inventories
- [x] hide - move item between inventories
- [x] sell - sell item
- [x] drop - drop item irretrievably
- [ ] upgrade - upgrade item
- [ ] training - train your training skill
- [ ] craft - see list of known recipes and craft them
- [ ] map - see list of avaliable locations
- [ ] adventure - start adventure
- [ ] spyglass - see nearby players
- [ ] attack - attack nearby player
- [ ] lake - go to the lake
- [ ] bait - cast the rod
- [ ] feq - show fishing basket
- [ ] catch - catch fish
- [ ] move - move item between fishing basket and inventory
- [ ] rank - show PvP ranking
- [ ] achiev - show list of achivements
- [x] return - stop adventure
