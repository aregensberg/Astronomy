export const mediaIdValidator = {
	mediaId:{
		isUUID: {
			errorMessage: "please provide a valid mediaId"
		},
		trim:true,
		in: ["params"]
	}
}