import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './AcountItem.module.scss';
import Image from '~/Component/Images';

const cx = classNames.bind(styles);

function AcountItem({data}) {
    return (
        <Link to={`/@${data.nickname}`} className={cx('wrapper')}>
            <Image
                className={cx('user-avt')}
                src={data.avatar}
                alt={data.full_name}
            />
            <div className={cx('infor')}>
                <h4 className={cx('user-name')}>
                    <span>{data.full_name}</span>
                    {data.tick && <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />}
                </h4>
                <span className={cx('user-acount')}>{data.nickname}</span>
            </div>
        </Link>
    );
}

export default AcountItem;
