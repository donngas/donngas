document.addEventListener('DOMContentLoaded', () => {
    const notice = document.getElementById('redirect-notice');
    const closeButton = document.getElementById('redirect-close');
    const url = new URL(window.location.href);
    const redirectedFromMissingSubdomain = url.searchParams.get('from_nopage') === '1';

    if (!notice || !closeButton || !redirectedFromMissingSubdomain) {
        return;
    }

    notice.hidden = false;

    closeButton.addEventListener('click', () => {
        notice.hidden = true;
        url.searchParams.delete('from_nopage');

        const nextUrl = `${url.pathname}${url.search}${url.hash}`;
        window.history.replaceState({}, '', nextUrl);
    });
});
