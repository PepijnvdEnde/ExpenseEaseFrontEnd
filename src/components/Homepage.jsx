import { Component } from "react";
// 1. #3A1078 2. #4E31AA 3. #2F58CD 4. #3795BD
// 1. #0E2954 2. #1F6E8C 3. #2E8A99 4. #84A7A1
class HomePage extends Component {
    render() {
        return (<> 
            <div className="h-screen w-screen bg-[#2E8A99] flex justify-center">
                
                <div className="bg-[#FFF2F2] border-2 border-[#84A7A1] rounded w-3/4 h-fill my-2 text-[#333333] text-center">color 2</div>

            </div>
        </>);
    }
}

export default HomePage;
