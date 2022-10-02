import discord, {GatewayIntentBits} from "discord.js"
import dotenv from "dotenv"

dotenv.config()

const token = process.env.DISCORD_TOKEN
const allIntents = new discord.IntentsBitField(32767)


const client = new discord.Client({
	intents: [
	GatewayIntentBits.DirectMessages,
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildBans,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,]
})

client.on("ready", () => {
	console.log(`Logged in as ${client.user?.tag}`);
})
client.on("messageCreate", async message => {
	// content check
	if(message.author.bot)return
	const content = message.content.toLowerCase();
	console.log("Message Received:", content);

	if(content.includes("11s") || (content.includes("11") && content.includes("seconds"))){
		await message.delete();
		const response = process.env["TS_11S_MESSAGE"]
		if(!response)throw new Error("The response message env variable was not set");
		await message.author.send(response);

	}
	else if(message.content.length > 10 && message.content.toUpperCase() == message.content){
		await message.delete();
	}
	
	
})

client.login(token);
