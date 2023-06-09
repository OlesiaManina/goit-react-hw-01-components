import PropTypes from 'prop-types';
import FriendListItem from '../FriendListItem/FriendListItem';
import css from './FriendList.module.css';

function FriendList({friends}) {
    return (
    <ul className={css.friendList}>
    {friends.map(friend => (<FriendListItem
    avatar={friend.avatar}
    name={friend.name}
    isOnline={friend.isOnline}
    key={friend.id}
  />
  ))}
    </ul>
    )
}

FriendList.prototypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
    })
    )
}

export default FriendList;