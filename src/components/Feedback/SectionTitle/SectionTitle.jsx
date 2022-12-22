import PropTypes from 'prop-types';

export const SectionTitle = ({ title, children }) => {
  return (
    <section className="section">
      <h2 title={title}>{title}</h2>
      {children}
    </section>
  );
};

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.object.isRequired,
};
