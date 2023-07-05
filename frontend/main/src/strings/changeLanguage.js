// <h1>{string.page.message.title}</h1>
// <p>{string.page.message.text(timeOut)}</p>
// <h1>You changed language to {params.language} </h1>
// <p>You will get redirected in {timeOut} seconds</p>
export default{
	page:{
		message:{
			title: "You change language to",
			text: text=>` ${text}` 
		}
	}
}
