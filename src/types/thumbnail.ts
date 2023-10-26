export interface IThumbnail {
	numberOfSharedPrompts: number,
	response: IThumbnailCard[],
}

export interface IThumbnailCard {
	sharedPromptId: number,
	nickname: string,
	numberOfLikes: number,
	numberOfComments: number,
	model: string,
	postTitle: string,
	hashTag: string[],
	category: string,
	postPinSize: string,
	languageCategory?: {
		finalAnswer: string,
		systemPrompt: string,
	},
	imageCategory?: {
		imageData: string,
		prompt: string,
	},
	codeCategory?: {
		codeShared: string,
		instruction: string,
	},
}
