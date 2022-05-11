import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from './AcountItem.module.scss';

const cx = classNames.bind(styles);

function AcountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('user-avt')}
                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/51faeb2beb46a239fccc193230a4259b~c5_300x300.webp?x-expires=1652256000&x-signature=G4%2FRDKocLzm6OLKNQViDOuKbT8U%3D"
                alt="user-avt"
            />
            <div className={cx('infor')}>
                <h4 className={cx('user-name')}>
                    <span>Nguyen Ngoc Quang</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('user-acount')}>NguyenNgocQuang.94</span>
            </div>
        </div>
    );
}

export default AcountItem;
