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
import MenuHeader from "../components/MenuHeader";
import MenuNavigation from "../components/MenuNavigation";

// Controla a barra de scroll
import ScrollableContainer from "../components/ScrollableContainer";

// screns/telas
import DatalayerValidatorScreen from "../screens/DatalayerValidatorScreen";

function App () {
    const [stateMenu,setStateMenu] = useState(0);

    const showScreen = () =>{
        var currentScreen = (<DatalayerValidatorScreen/>);
        switch (stateMenu) {
            case 0:
                currentScreen = (<DatalayerValidatorScreen/>);
                break;
            case 1:
                currentScreen = (<div>Teste</div>);
            break;
            default:
                break;
        }
        return currentScreen; 
    }

    const buttonsView = (index="id_teste") =>{
        var buttonElements = (
            <Fragment>
                <button
                className="bg-transparent p-3 rounded-full text-gray-400 text-[1.25rem] active:text-gray-300 focus:text-gray-400"
                // className="mr-1.5 inline-block p-2 bg-gray-400 text-white rounded-tr-lg rounded-br-lg opacity-75 hover:bg-gray-500 active:bg-gray-500 transition duration-300"
                type="button"
                data-te-offcanvas-toggle
                data-te-target={`#${index}`}
                aria-controls={index}
                // data-te-ripple-init
                // data-te-ripple-color="light"
                >
                    <i className="fa-solid fa-wrench"></i>
                </button>
            </Fragment>
        );


        return buttonElements;
    }

    return (
        <Fragment>
            <div className="w-[500px] p-2 rounded-lg bg-white text-[0.8125rem] leading-5 text-slate-900 shadow-xl shadow-black/5 ring-slate-700/10">                
                <MenuHeader>
                    {buttonsView("id_menu_tools")}
                </MenuHeader>
                
                <ScrollableContainer>
                    {showScreen()}
                </ScrollableContainer>

                <MenuNavigation 
                title={`FERRAMENTAS`}
                index="id_menu_tools" 
                activeFloatingButton={false}
                >
                    ---
                </MenuNavigation>
            </div>           
        </Fragment>
    );
}
const root = document.getElementById("root");

createRoot(root).render(<App/>);
