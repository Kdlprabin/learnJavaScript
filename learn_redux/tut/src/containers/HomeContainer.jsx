import Home from '../components/Home'
import { connect } from 'react-redux';
import { addTOCart } from '../services/Actions/Action';


const mapStateToProps = state => {

}
const mapDispatchToProps = dispatch => {
    addTOCartHandler: data => dispatch(addTOCart(data));
}
export default connect(mapStateToProps, mapDispatchToProps)(Home)
