interface LoadMoreBtnProps {
  onClick: () => void;
}

export default function LoadMoreBtn({onClick}: LoadMoreBtnProps) {
    return (
        <button className="lmBtn" onClick={onClick}>LOAD MORE</button>
    )
}