/**
 * Copyright (c) Facebook, Inc. and its affiliates. All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// The original implementation imported the ansi-styles package for a list of
// all possible colors so that it could make dummy functions for each.
// Instead, make one dummy function and use webpack to rewrite all calls
// to chalk via string-replace-loader.
export function _(s: string) {
  return s
}
