import "assets/customCSS/blocks.css"
import WarningAmberIcon from '@mui/icons-material/WarningAmber';

function DangerBlock({title, message}){
	return <div class="callout-block callout-danger">
		<div class="icon-holder">
		<WarningAmberIcon />
		</div>
		<div class="content">
		<h4 class="callout-title">{title}</h4>
		<p>{message}</p>
		</div>
		</div>
}


export default DangerBlock;
