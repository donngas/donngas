FROM nginx:alpine

# Bundle the landing page and fallback redirect behavior into one nginx image.
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY public /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
