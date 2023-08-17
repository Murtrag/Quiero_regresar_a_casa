// Components
import Counters from "publicWebsite/components/widgets/Counters";
import Information from "publicWebsite/components/widgets/Information";
import DesignBlocks from "publicWebsite/components/widgets/DesignBlocks";
import Pages from "publicWebsite/components/widgets/Pages";
import Testimonials from "publicWebsite/components/widgets/Testimonials";
import Download from "publicWebsite/components/widgets/Download";

// import InformBlcok form "";
// import InformBlock from "components/MessageBlock/Warning";
import WarningBlock from "components/widgets/MessageBlock/Warning";
import DangerBlock from "components/widgets/MessageBlock/Danger";
import SuccessBlock from "components/widgets/MessageBlock/Success";
import InfoBlock from "components/widgets/MessageBlock/Info";
import Carousel from "components/widgets/Carousel";

const permitedComponents = [
	{ type: 'counters', component: <Counters />},
	{ type: 'information', component: <Information />},
	{ type: 'warningblock', component: <WarningBlock />},
	{ type: 'successblock', component: <SuccessBlock />},
	{ type: 'dangerblock', component: <DangerBlock />},
	{ type: 'infoblock', component: <InfoBlock />},
	{ type: 'carousel', component: <Carousel />},
];



// const replaceComponent = (domNode, i)=>{
// 	for (var i=0; i < permitedComponents.length; i++){
// 		if (domNode.type && domNode.type === permitedComponents[i].type) {
// 			return {...domNode, type: permitedComponents[i].component.type, key: i}
// 		}

// 	}
// 	return domNode
// }
const replaceComponent = (domNode, i) => {
  if (domNode.type) {
    for (let i = 0; i < permitedComponents.length; i++) {
      if (domNode.type === permitedComponents[i].type) {
        return { ...domNode, type: permitedComponents[i].component.type, key: i };
      }
    }
  }

  if (
    domNode.props &&
    domNode.props.children &&
    Array.isArray(domNode.props.children)
  ) {
    return {
      ...domNode,
      props: {
        ...domNode.props,
        children: domNode.props.children.map((child, index) =>
          replaceComponent(child, index)
        ),
      },
    };
  }

  return domNode;
};


export {
	replaceComponent
}
