//
// Components
import Counters from "publicWebsite/components/widgets/Counters";
import Information from "publicWebsite/components/widgets/Information";
import DesignBlocks from "publicWebsite/components/widgets/DesignBlocks";
import Pages from "publicWebsite/components/widgets/Pages";
import Testimonials from "publicWebsite/components/widgets/Testimonials";
import Download from "publicWebsite/components/widgets/Download";

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
