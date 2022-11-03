import PT from 'prop-types';
export default function Notifcation({ message }) {
  return <div>{message}</div>;
}
Notifcation.propTypes = {
  message: PT.string.isRequired,
};
