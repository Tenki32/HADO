const metaDescription = document.querySelector('meta[name="description"]');

if (metaDescription) {

  metaDescription.setAttribute('content', 'Новое описание для метатега description.');

  console.log('Описание успешно изменено!');
} else {
  console.log('Метатег description не найден.');
}
