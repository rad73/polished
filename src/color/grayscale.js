// @flow

import parseToHsl from './parseToHsl'
import toColorString from './toColorString'
import nameToHex from '../internalHelpers/_nameToHex'

/**
 * Converts the color to a grayscale, by reducing its saturation to 0.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: grayscale('#CCCD64'),
 *   background: grayscale('rgba(204,205,100,0.7)'),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${grayscale('#CCCD64')};
 *   background: ${grayscale('rgba(204,205,100,0.7)')};
 * `
 *
 * // CSS in JS Output
 * element {
 *   background: "#999";
 *   background: "rgba(153,153,153,0.7)";
 * }
 */
function grayscale(color: string): string {
  const normalizedColor = nameToHex(color)
  const hslColor = parseToHsl(normalizedColor)
  return toColorString({
    ...hslColor,
    saturation: 0,
  })
}

export default grayscale
