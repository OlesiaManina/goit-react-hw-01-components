import PropTypes from 'prop-types';
import css from './FriendListItem.module.css';

function FriendListItem({avatar, name, isOnline}) {
    return (
    <li className={css.item} >
    {isOnline? <span className={css.online}></span> : <span className={css.offline}></span>}
    <img className={css.avatar} src={avatar} alt={name} width="48" />
    <p className={css.name}>{name}</p>
</li>
)}

FriendListItem.prototypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired
}

export default FriendListItem;