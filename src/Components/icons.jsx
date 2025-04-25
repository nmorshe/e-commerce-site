import { IoMdHome } from "react-icons/io";
import { FaArrowDown, FaTrash, FaArrowUp, FaShoppingCart } from "react-icons/fa";

import PropTypes from 'prop-types';

export const HomeIcon = ({ width, onClick }) => {
    return (
        <svg width={width} onClick={onClick} fill='currentColor' viewBox='4 4 30 30'>
            <IoMdHome />
        </svg>
    );
}

export const DownIcon = ({ width, onClick }) => {
    return (
        <svg width={width} onClick={onClick} fill='currentColor' viewBox='0 0 20 20'>
            <FaArrowDown />
        </svg>
    );
}

export const UpIcon = ({ width, onClick }) => {
    return (
        <svg width={width} onClick={onClick} fill='currentColor' viewBox='0 0 20 20'>
            <FaArrowUp />
        </svg>
    );
}

export const CartIcon = ({ width, onClick }) => {
    return (
        <svg width={width} onClick={onClick} fill='currentColor' viewBox='0 0 35 35'>
            <FaShoppingCart />
        </svg>
    );
}

export const TrashIcon = ({ width, onClick }) => {
    return (
        <svg width={width} onClick={onClick} fill='currentColor' viewBox='0 0 20 20' >
            <FaTrash />
        </svg>
    );
}

HomeIcon.propTypes = {
    width: PropTypes.number.isRequired,
    onClick: PropTypes.func.isRequired
}

DownIcon.propTypes = {
    width: PropTypes.number.isRequired,
    onClick: PropTypes.func.isRequired
}

UpIcon.propTypes = {
    width: PropTypes.number.isRequired,
    onClick: PropTypes.func.isRequired
}

CartIcon.propTypes = {
    width: PropTypes.number.isRequired,
    onClick: PropTypes.func.isRequired
}

TrashIcon.propTypes = {
    width: PropTypes.number.isRequired,
    onClick: PropTypes.func.isRequired
}