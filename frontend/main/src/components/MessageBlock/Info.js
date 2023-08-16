import "assets/customCSS/blocks.css"
import InfoIcon from '@mui/icons-material/Info';

function InfoBlock({title, message}){
	return <div class="callout-block callout-info">
		<div class="icon-holder">
		<InfoIcon />
		</div>
		<div class="content">
		<h4 class="callout-title">{title}</h4>
		<p>{message}</p>
		</div>
		</div>
}


export default InfoBlock;
