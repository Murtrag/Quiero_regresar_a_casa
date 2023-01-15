//
// Components
import Counters from "components/widgets/Counters";
import Information from "components/widgets/Information";
import DesignBlocks from "components/widgets/DesignBlocks";
import Pages from "components/widgets/Pages";
import Testimonials from "components/widgets/Testimonials";
import Download from "components/widgets/Download";

const permitedComponents = [
	{ type: 'counters', component: <Counters />},
	{ type: 'information', component: <Information />},
];



const replaceComponent = (domNode, i)=>{
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
