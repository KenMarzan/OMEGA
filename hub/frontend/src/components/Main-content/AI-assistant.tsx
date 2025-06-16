import { KeyboardEventHandler, MouseEventHandler, useEffect } from "react";

export default function AI_assistant(): React.JSX.Element{
    const enter:KeyboardEventHandler = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (event.key == "Enter") {
            if(!event.shiftKey){
                event.preventDefault();
                console.log("Enter is working");
                const ai = document.getElementById("prompt") as HTMLTextAreaElement | null;
                const form = document.getElementById("prompt-box") as HTMLFormElement | null;
                if (ai && form) {
                    const temp:string = ai.style.backgroundColor;
                    ai.style.backgroundColor = "green";
                    form.style.transform = "translate()"; //Magtutuos pa tayo animation
                    setTimeout(()=>{
                        ai.style.backgroundColor = temp;
                    },1000);
                }
            }
        }
    };
    const click:MouseEventHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
        if (event.currentTarget){
            console.log("Clickity");
        }
    };

    return(
        <div className = "AI-assistant">
            Try our AI now
            <div>
                <form id= "prompt-box" action= "">
                    <textarea id="prompt" placeholder="Type your question..." onKeyDown={enter}></textarea>
                    <button onClick={click}>Click</button>
                </form>
            </div>
        </div>
    );
}
