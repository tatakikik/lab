export default class CharacterCard extends Component {
    render(){
        return (
            <div>{this.props.value}</div>
        )
    }
}
   
   import CharacterCard from './CharacterCard';
   class App extends Component {
    render() {
        return (
    <div>
        <CharacterCard value="h"/>
        <CharacterCard value="i"/>
    </div>
        );
    }
}