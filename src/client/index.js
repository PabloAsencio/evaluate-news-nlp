import { handleSubmit } from './js/formHandler';
import { updateUI } from './js/uiUpdater';
import { isValidURL } from './js/urlValidator';

import './styles/resets.scss';
import './styles/base.scss';
import './styles/footer.scss';
import './styles/form.scss';
import './styles/header.scss';
import './styles/analysis.scss';

document.getElementById('form').addEventListener('submit', handleSubmit);
document.getElementById('submit').addEventListener('submit', handleSubmit);
document.getElementById('submit').addEventListener('click', handleSubmit);

export { handleSubmit, updateUI, isValidURL };
