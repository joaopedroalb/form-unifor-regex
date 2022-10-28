export const REGEX = {
    email: new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/),
    name: new RegExp(/^[A-Z][a-z]*(?: [A-Z][a-z]*)*$/),
    url: new RegExp('^(https?:\\/\\/)?'+ 
                    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ 
                    '((\\d{1,3}\\.){3}\\d{1,3}))'+ 
                    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ 
                    '(\\?[;&a-z\\d%_.~+=-]*)?'+ 
                    '(\\#[-a-z\\d_]*)?$','i')
}