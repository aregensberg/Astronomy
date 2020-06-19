export const newsIdValidator = {
    newsId:{
        isUUID: {
            errorMessage: "please provide a valid newsId"
        },
        trim:true,
        in: ["params"]
    }
}