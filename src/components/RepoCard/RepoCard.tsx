import './RepoCard.css'
import * as React from "react";
import ApiStore from "../../shared/store/ApiStore";
import {HTTPMethod} from "../../shared/store/ApiStore/types";

const baseUrl = 'https://api.github.com/';
function RepoCard() {
    return (
        <div className = "repo-card">
            <img className = 'repo-icon'/>
            <div className = 'repo-info'>
                <div className = 'repo-name'>kts-frontend-summer-jnfvfjnovvvvvvvvvvvnnnnnnnnnnnnnnnnnn</div>
                <div className = 'repo-author'><a className = 'repo-author' href='#'>kts-studio</a></div>
                <div className = 'repo-bottom-info'>
                    <div className = 'repo-rating'>
                        <svg className = 'rating-icon' width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M6.99999 0.21875C7.1225 0.218671 7.24259 0.252887 7.34666 0.317526C7.45074 0.382165 7.53463 0.474645 7.58887 0.5845L9.23562 3.92262L12.9194 4.45812C13.0405 4.47572 13.1543 4.52686 13.248 4.60575C13.3416 4.68465 13.4112 4.78816 13.4491 4.90458C13.487 5.021 13.4915 5.1457 13.4622 5.26457C13.4329 5.38344 13.371 5.49175 13.2834 5.57725L10.6181 8.176L11.2472 11.844C11.268 11.9647 11.2546 12.0888 11.2085 12.2022C11.1624 12.3157 11.0854 12.414 10.9864 12.486C10.8873 12.558 10.7701 12.6009 10.648 12.6097C10.5258 12.6186 10.4036 12.5931 10.2952 12.5361L6.99999 10.8036L3.70474 12.5361C3.59641 12.593 3.47432 12.6185 3.35228 12.6096C3.23024 12.6008 3.1131 12.558 3.01409 12.4861C2.91508 12.4142 2.83813 12.3161 2.79195 12.2028C2.74577 12.0895 2.73219 11.9655 2.75274 11.8449L3.38274 8.17513L0.715741 5.57725C0.627862 5.49178 0.565678 5.38341 0.536237 5.26441C0.506795 5.14541 0.511273 5.02055 0.549163 4.90396C0.587053 4.78738 0.656839 4.68374 0.750615 4.60478C0.844391 4.52583 0.958406 4.47472 1.07974 4.45725L4.76349 3.92262L6.41112 0.5845C6.46535 0.474645 6.54925 0.382165 6.65332 0.317526C6.75739 0.252887 6.87748 0.218671 6.99999 0.21875ZM6.99999 2.35813L5.78812 4.8125C5.74105 4.90779 5.67156 4.99022 5.58559 5.05271C5.49963 5.1152 5.39978 5.15588 5.29462 5.17125L2.58474 5.565L4.54474 7.476C4.621 7.55026 4.67805 7.64195 4.71098 7.74316C4.7439 7.84438 4.75172 7.95209 4.73374 8.057L4.27174 10.7555L6.69462 9.4815C6.78879 9.43199 6.89359 9.40612 6.99999 9.40612C7.10639 9.40612 7.21119 9.43199 7.30537 9.4815L9.72912 10.7555L9.26537 8.057C9.24739 7.95209 9.2552 7.84438 9.28813 7.74316C9.32106 7.64195 9.37811 7.55026 9.45437 7.476L11.4144 5.56588L8.70537 5.17212C8.60021 5.15676 8.50035 5.11608 8.41439 5.05359C8.32843 4.9911 8.25893 4.90866 8.21187 4.81337L6.99999 2.35725V2.35813Z" fill="#FF9432"/>
                        </svg>
                        123</div>
                    <div className = 'repo-update'>Updated 19.06.2021</div>
                </div>
            </div>
        </div>
    );
}

export default RepoCard;
