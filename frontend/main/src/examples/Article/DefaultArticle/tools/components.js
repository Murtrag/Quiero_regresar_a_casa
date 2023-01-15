//
// Components
import Counters from "pages/Main/sections/Counters";
import Information from "pages/Main/sections/Information";
import DesignBlocks from "pages/Main/sections/DesignBlocks";
import Pages from "pages/Main/sections/Pages";
import Testimonials from "pages/Main/sections/Testimonials";
import Download from "pages/Main/sections/Download";

const permitedComponents = [
	{ type: 'counters', component: <Counters />},
	{ type: 'information', component: <Information />},
];



const replaceComponent = (domNode, i)=>{
	console.log(domNode)
	console.log(permitedComponents)
	for (var i=0; i < permitedComponents.length; i++){
		if (domNode.type && domNode.type === permitedComponents[i].type) {
			return {...domNode, type: permitedComponents[i].component.type, key: i}
		}

	}
	return domNode
}

export {
	replaceComponent
}
