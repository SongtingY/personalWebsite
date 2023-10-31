import {GithubOutlined} from "@ant-design/icons";

const projects = [
    {
        name: 'Nowcoder Platform',
        startDate: '2023-04-01',
        endDate: '2022-09-01',
        summary: [
        'Developed a comprehensive forum application using <b>Spring Boot</b> that featured email-based registration, MD5 password hashing with salting, dynamic captcha validation, post & comment creation, chat, and sensitive word filtering.',
        'Implemented user authentication by issuing login credentials stored in Redis, integrated Spring Security for user registration and password encryption, and utilized Thread Local to store user data facilitating distributed deployment.',
        'Implemented the full-text search with Elasticsearch and executed global search functionality with + IK tokenizer; used Kafka for real-time notifications and post synchronization.',
        'Optimized server performance through a multi-tier caching strategy using Caffeine (local cache) by 80% and Redis (distributed cache) and utilized Quartz for distributed tasks like hot post ranking computation.'
        ],
        icon: <GithubOutlined style={{ fontSize: '23px'}}/>,
        link:'https://github.com/SongtingY/nowcoderBackend'
    },
    {
        name: 'Global Press Release System',
        startDate: '2022-05-01',
        endDate: '2022-07-01',
        summary: [
            'Developed a user-friendly interface for press release system that enabled users to access, distribute press releasee and press traffic visualization with React and JavaScript.',
            'Provided responsive web design using React with Ant Design, including features of search inventory, customizing press release layout for different types of medias and visualization.',
            'Integrated D3.js for interactive data visualization; Utilized Redux Toolkit to manage application states and to handle asynchronous redux actions.'
        ],
        icon: <GithubOutlined style={{ fontSize: '23px'}}/>,
        link:'https://github.com/SongtingY/Personal-website'
    },
    {
        name: 'House Pricing Clustering and Prediction',
        startDate: '2022-04-01',
        endDate: '2022-05-01',
        summary: [
            'Led team of 4: organized meetings, delegated tasks, coding and debugging, etc. Outperformed peers in class.',
            'Preprocessed large data (1460 records, 80 variables) and dealt with missing values and outliers NumPy pandas. Performed correlation analysis to filter the 15 most relevant variables.',
            'Compared various evaluation metrics for 6 algorithms - KNN, Random Forest Regression, Gaussian, Catboost, XGBoost, and SVM. Selected the 4 most optimal ensembled models that achieved 0.13 MSE in prediction.'
        ],
        icon: <GithubOutlined style={{ fontSize: '23px'}}/>,
        link:'https://github.com/SongtingY/Personal-website'
    }

];

export default projects;