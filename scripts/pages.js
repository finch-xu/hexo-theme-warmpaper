hexo.extend.generator.register('tags_index', function(locals) {
  return {
    path: 'tags/index.html',
    data: { title: 'Tags' },
    layout: ['tags']
  };
});

hexo.extend.generator.register('categories_index', function(locals) {
  return {
    path: 'categories/index.html',
    data: { title: 'Categories' },
    layout: ['categories']
  };
});
