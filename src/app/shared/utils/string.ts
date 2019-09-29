export class StringUtils {

  public static isEmpty(str: string): boolean {
    return StringUtils.isNull(str) || str === '';
  }

  public static isNull(str: any): boolean {
    return !str || str instanceof String;
  }

  public static startsWith(sourceString: string, startWith: string): boolean {
    if (StringUtils.isNull(sourceString) || StringUtils.isNull(startWith)) {
      return false;
    }
    if (startWith.length > sourceString.length) {
      return false;
    }
    return sourceString.toLowerCase().substring(0, startWith.length) === startWith.toLowerCase();
  }

  public static cleanRouteLink(link: string) {
    if (StringUtils.isEmpty(link)) {
      return '';
    }

    const newLink = link.charAt(0) && link.charAt(0) === '/' ? link.substring(1) : link;

    return newLink ? newLink.includes('?') ? newLink.split('?')[0] : newLink : newLink;
  }
}
