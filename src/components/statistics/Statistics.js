import React from "react";
import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

const Statistics = ({ title, stats }) => {
    return (
<section className={styles.statistics}>
      {title ? <h2 className={styles.title}>{title}</h2> : null}

      <ul className={styles.statList}>
        {stats.map(el => {
          return (
            <li
              className={styles.item}
              style={{ backgroundColor: el.background }}
              key={el.id}
            >
              <span className={styles.label}>{el.label}</span>
              <span className={styles.percentage}>{el.percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
    );
};

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.string.isRequired,
};

export default Statistics;