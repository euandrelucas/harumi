import type {
	CategoryData,
	ChannelPermissionsData,
	CreateOptions,
	LoadOptions,
	TextChannelData,
	VoiceChannelData
} from '../types'
import type {
	CategoryChannel,
	Guild,
	TextChannel,
	VoiceChannel,
	NewsChannel
} from 'discord.js'
/**
 * Gets the permissions for a channel
 */
export declare function fetchChannelPermissions(
	channel: TextChannel | VoiceChannel | CategoryChannel | NewsChannel
): ChannelPermissionsData[];
/**
 * Fetches the voice channel data that is necessary for the backup
 */
export declare function fetchVoiceChannelData(
	channel: VoiceChannel
): Promise<VoiceChannelData>;
/**
 * Fetches the text channel data that is necessary for the backup
 */
export declare function fetchTextChannelData(
	channel: TextChannel | NewsChannel,
	options: CreateOptions
): Promise<TextChannelData>;
/**
 * Creates a category for the guild
 */
export declare function loadCategory(
	categoryData: CategoryData,
	guild: Guild
): Promise<CategoryChannel>;
/**
 * Create a channel and returns it
 */
export declare function loadChannel(
	channelData: TextChannelData | VoiceChannelData,
	guild: Guild,
	category?: CategoryChannel,
	options?: LoadOptions
): Promise<unknown>;
/**
 * Delete all roles, all channels, all emojis, etc... of a guild
 */
export declare function clearGuild(guild: Guild): Promise<void>;
