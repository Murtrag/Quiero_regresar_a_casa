import "assets/customCSS/blocks.css"
import InfoIcon from '@mui/icons-material/Info';
import {findChild, findChildren } from "utils/findChild";
import { renderToStaticMarkup } from 'react-dom/server';

function InfoBlock({children}){
  const title = findChild(children, "title");
  const description = findChild(children, "description");

	console.log(title)

	return <div class="callout-block callout-info">
		<div class="icon-holder">
		<InfoIcon />
		</div>
		<div class="content">
		<h4 class="callout-title" dangerouslySetInnerHTML={{__html: title.props.children}}/>
		<p dangerouslySetInnerHTML={{__html: renderToStaticMarkup(description.props.children)}}/>
		</div>
		</div>
}


export default InfoBlock;
