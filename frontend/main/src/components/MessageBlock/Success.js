import "assets/customCSS/blocks.css"
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';

function SuccessBlock({title, message}){
	return <div class="callout-block callout-success">
	<div class="icon-holder">
		<ThumbUpAltIcon />
	</div>
	<div class="content">
	<h4 class="callout-title">{title}</h4>
	<p>{message}</p>
	</div>
	</div>
}


export default SuccessBlock;
