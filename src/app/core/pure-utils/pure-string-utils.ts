export class PureStringUtils {

  public static isEmpty(str: string): boolean {
    return PureStringUtils.isNull(str) || str === '';
  }

  public static isNull(str: any): boolean {
    return !str || str instanceof String;
  }

  public static startsWith(sourceString: string, startWith: string): boolean {
    if (PureStringUtils.isNull(sourceString) || PureStringUtils.isNull(startWith)) {
      return false;
    }
    if (startWith.length > sourceString.length) {
      return false;
    }
    return sourceString.toLowerCase().substring(0, startWith.length) === startWith.toLowerCase();
  }

  public static cleanRouteLink(link) {
    if (PureStringUtils.isEmpty(link)) {
      return '';
    }

    return link.charAt(0) && link.charAt(0) === '/' ? link.substring(1) : link;
  }
}
