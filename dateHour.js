class Relogio extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            hora:'00:00:00',
            date:'00/00/00'
        };

        setInterval(()=>{
            this.setState({ hora:new Date().toLocaleTimeString() })
        }, 1000);

        setInterval(()=>{
            this.setState({ date:new Date().toLocaleDateString() } )
        }, 1000);
    }
    render(){
        return (
            <div>
                To Do List {this.state.date} 
                {/* {this.state.hora} */}
            </div>
        );
    }
}

let elemento = (
    <div>
        <Relogio />
    </div>
);

ReactDOM.render(
    elemento,
    document.getElementById("date")
);
