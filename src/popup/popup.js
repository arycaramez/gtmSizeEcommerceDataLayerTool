import React, 
{ 
    Fragment, 
    // useEffect, 
    useState 
} from "react";

import { createRoot } from "react-dom/client";

// Node modules
import "../assets/tailwind.css";
import "../../node_modules/@fortawesome/fontawesome-free/css/all.css";

// Menus
import MenuSettings from "../components/MenuSettings";
import { MenuNavigationLeft,NavigationScreenChanger,NavgationCollapseElement } from "../components/MenuNavigation";

// Controla a barra de scroll
import ScrollableContainer from "../components/ScrollableContainer";

// screns/telas
import DatalayerValidatorScreen from "../screens/DatalayerValidatorScreen";

function App () {
    const [stateMenu,setStateMenu] = useState(0);
    const indexList = {
        menu_tools: "menu_tools",
        menu_settings: "menu_settings",
        teste1: "menu_teste1"
    }

    const showScreen = () =>{
        var currentScreen = (<DatalayerValidatorScreen/>);
        switch (stateMenu) {
                case 0:
                currentScreen = (<DatalayerValidatorScreen/>);
                break;
                case 1:
                    currentScreen = (<div>Teste 1</div>);
                break;
                case 2:
                    currentScreen = (<div>Teste 2</div>);
                break;
            default:
                break;
        }
        return currentScreen; 
    }

    return (
        <Fragment>
            <div className="w-[500px] p-2 rounded-lg bg-white text-[0.8125rem] leading-5 text-slate-900 shadow-xl shadow-black/5 ring-slate-700/10">
                
                <div className="flex justify-between items-center ">
                    <div className="font-medium text-[1.25rem]">
                        <span className="ml-4 mr-2">
                            <i className="fa-solid fa-chart-column"></i>
                        </span>
                        Analytical Tools
                    </div>
                    
                    <div>
                        <button
                        id={`${indexList.menu_tools}_btn`}
                        className="bg-transparent p-3 rounded-full text-gray-400 text-[1.25rem] active:text-gray-300 focus:text-gray-400"
                        data-te-sidenav-toggle-ref
                        aria-haspopup="true"
                        data-te-target={`#${indexList.menu_tools}`}
                        aria-controls={`#${indexList.menu_tools}`}
                        >
                            <i className="fa-solid fa-wrench"></i>
                        </button>

                        <button
                        id={`${indexList.menu_settings}_btn`}
                        className="bg-transparent p-3 rounded-full text-gray-400 text-[1.25rem] active:text-gray-300 focus:text-gray-400"
                        type="button"
                        data-te-offcanvas-toggle
                        data-te-target={`#${indexList.menu_settings}`}
                        aria-controls={`${indexList.menu_settings}`}
                        >
                            <i className="fa-solid fa-bars"></i>
                        </button>
                    </div>
                </div>

                <ScrollableContainer>
                    {showScreen()}
                </ScrollableContainer>

                <MenuNavigationLeft 
                index={indexList.menu_tools}
                initHidden={true}
                title="FERRAMENTAS"
                >
                    <ScrollableContainer>
                        <NavigationScreenChanger
                        ariaCurrent={stateMenu === 0}
                        onClickAction={()=>{setStateMenu(0)}}
                        targetIndex={indexList.menu_tools}
                        >
                            <span className="mr-2"><i class="fa-solid fa-list-check"></i></span>
                            DataLayer Analyzer
                        </NavigationScreenChanger>

                        <NavgationCollapseElement initHidden={false}>
                            
                            <NavigationScreenChanger
                            ariaCurrent={stateMenu === 1}
                            onClickAction={()=>{setStateMenu(1)}}
                            targetIndex={indexList.menu_tools}
                            >
                                Teste 1
                            </NavigationScreenChanger>

                            <NavigationScreenChanger
                            ariaCurrent={stateMenu === 2}
                            onClickAction={()=>{setStateMenu(2)}}
                            targetIndex={indexList.menu_tools}
                            >
                                Teste 2
                            </NavigationScreenChanger>

                        </NavgationCollapseElement>
                    </ScrollableContainer>
                </MenuNavigationLeft>                

                <MenuSettings
                title={`CONFIGURAÇÕES`}
                index={indexList.menu_settings} 
                activeFloatingButton={false}
                >
                    
                </MenuSettings>
            </div>           
        </Fragment>
    );
}
const root = document.getElementById("root");

createRoot(root).render(<App/>);
