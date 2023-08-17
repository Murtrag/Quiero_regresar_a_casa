import "assets/customCSS/blocks.css"
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import {findChild, findChildren } from "utils/findChild";
import { renderToStaticMarkup } from 'react-dom/server';

function SuccessBlock({children}){
  const title = findChild(children, "title");
  const description = findChild(children, "description");

	return <div class="callout-block callout-success">
	<div class="icon-holder">
		<ThumbUpAltIcon />
	</div>
	<div class="content">
		<h4 class="callout-title" dangerouslySetInnerHTML={{__html: title.props.children}}/>
		<p dangerouslySetInnerHTML={{__html: renderToStaticMarkup(description.props.children)}}/>
	</div>
	</div>
}


export default SuccessBlock;
