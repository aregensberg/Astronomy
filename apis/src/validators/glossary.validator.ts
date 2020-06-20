export const glossaryIdValidator = {
	glossaryId:{
		isUUID: {
			errorMessage: "please provide a valid glossaryId"
		},
		trim:true,
		in: ["params"]
	}
}
