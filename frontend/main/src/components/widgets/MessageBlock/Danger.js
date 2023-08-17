import "assets/customCSS/blocks.css"
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import {findChild, findChildren } from "utils/findChild";
import { renderToStaticMarkup } from 'react-dom/server';

function DangerBlock({children}){
  const title = findChild(children, "title");
  const description = findChild(children, "description");

	return <div class="callout-block callout-danger">
		<div class="icon-holder">
		<WarningAmberIcon />
		</div>
		<div class="content">
		<h4 class="callout-title" dangerouslySetInnerHTML={{__html: title.props.children}}/>
		<p dangerouslySetInnerHTML={{__html: renderToStaticMarkup(description.props.children)}}/>
		</div>
		</div>
}


export default DangerBlock;
