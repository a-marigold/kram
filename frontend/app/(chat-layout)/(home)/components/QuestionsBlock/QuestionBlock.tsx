import { getRandomArrayElement } from '@/utils/GetRandomArrayElement';
import { homePhrases } from '@/constants/homePhrases';

import questionStyles from './QuestionBlock.module.scss';

export default function QuestionBlock() {
    const phrase = getRandomArrayElement(homePhrases);

    return (
        <div className={questionStyles['question-block']}>
            <h1 className={questionStyles['title']}>{phrase}</h1>
        </div>
    );
}
