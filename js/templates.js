export const userSwipeTmpl = (user) =>
    
    `
<div class="single-slide">
    <div class="slide-content">${user.description}</div>
    <img src="${user.source}" alt="${user.alt}">
</div>
`;