FROM omnijarstudio/naamio:0.2

LABEL authors="Phil J. Łaszkowicz <phil@fillip.pro>"

RUN mkdir -p /usr/share/naamio/lehti

COPY .dist /usr/share/naamio/lehti

ENV NAAMIO_SOURCE=lehti
ENV NAAMIO_TEMPLATES=lehti/stencils/
ENV NAAMIO_PORT=8090

EXPOSE ${NAAMIO_PORT}

WORKDIR /usr/share/naamio/

ENTRYPOINT ["/usr/share/naamio/Naamio"]
