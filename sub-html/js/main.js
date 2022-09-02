const render = (options) => {
  document.querySelector('#current-env').innerHTML = 'qiankun'
  // 展示基座下发的状态
  const node = document.createElement('div')
  node.innerHTML = `Hello, render with HTML`
  document.querySelector('.container').appendChild(node)
  return Promise.resolve();
};

(global => {
  global['prehtml'] = {
    bootstrap: () => {
      console.log('purehtml bootstrap');
      return Promise.resolve();
    },
    mount: (options) => {
      console.log('purehtml mount', options);
      return render(options);
    },
    unmount: () => {
      console.log('purehtml unmount');
      return Promise.resolve();
    },
  };
})(window);
